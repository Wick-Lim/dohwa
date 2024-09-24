import { Colors, ResizeSensor, TreeNodeInfo } from "@blueprintjs/core";
import { Container, Sprite, Stage } from "@pixi/react";
import { Texture } from "pixi.js";
import { FC, useState } from "react";
import Viewport from "./viewport";

interface RendererProps {
    data: TreeNodeInfo[];
    onDataChange: (data: any) => Promise<void> | void;
}

const Renderer: FC<RendererProps> = ({ data, onDataChange }) => {
    const [size, setSize] = useState<DOMRectReadOnly>();

    const handleResize = ([entry]: ResizeObserverEntry[]) => {
        console.log(size, data, onDataChange);

        setSize(entry.contentRect);
    };

    return (
        <ResizeSensor onResize={handleResize}>
            <div style={{ width: "100%", height: "100%", border: '0.5px solid black' }}>
                {size && (
                    <Stage width={size.width} height={size.height} options={{ background: Colors.LIGHT_GRAY1 }}>
                        <Viewport size={size}>
                            {data.map((_, index) => (
                                <Container key={index} x={(50 + 414) * index} y={20}>
                                    <Sprite texture={Texture.WHITE} width={414} height={896} />
                                </Container>
                            ))}
                        </Viewport>
                    </Stage>
                )}
            </div>
        </ResizeSensor>
    );
};

export default Renderer;
