import { PixiComponent, withPixiApp } from "@pixi/react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { Application } from "pixi.js";
import { createElement, PropsWithChildren } from "react";

const Viewport = PixiComponent("Viewport", {
    create: (props) => new PixiViewport({
        screenWidth: props.size.width,
        screenHeight: props.size.height,
        worldWidth: 10000,
        worldHeight: 10000,
        events: props.app.renderer.events
    }).drag().pinch().wheel().fit(true, props.size.width, props.size.height * 1.5),
    applyProps: (instance, _, props) => {
        instance.resize(props.size.width, props.size.height, 10000, 10000);
    },
});

export default withPixiApp<PropsWithChildren<{
    app: Application;
    size: DOMRectReadOnly;
}>>((props) => createElement(Viewport, props));
