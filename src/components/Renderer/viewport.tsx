import { PixiComponent, withPixiApp } from "@pixi/react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { createElement } from "react";

const Viewport = PixiComponent("Viewport", {
    create: (props) => {
        const viewport = new PixiViewport({
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            worldWidth: 1000,
            worldHeight: 1000,
            events: props.app.renderer.events
        });

        viewport.drag().pinch().wheel();

        return viewport;
    },
});

export default withPixiApp((props) => createElement(Viewport, props));
