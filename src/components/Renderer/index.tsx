import { Colors, ResizeSensor } from "@blueprintjs/core";
import { Container, Sprite, Stage } from "@pixi/react";
import { Texture } from "pixi.js";
import { FC, useState } from "react";
import Viewport from "./viewport";

interface RendererProps {
    data: any;
    onDataChange: (data: any) => Promise<void> | void;
}

const Renderer: FC<RendererProps> = ({ data, onDataChange }) => {
    const [size, setSize] = useState<DOMRectReadOnly>();

    console.log(size, data, onDataChange);

    return (
        <ResizeSensor onResize={([entry]) => setSize(entry.contentRect)}>
            <div style={{ width: "100%", height: "100%", border: '0.5px solid black' }}>
                {size && (
                    <Stage width={size.width} height={size.height} options={{ background: Colors.LIGHT_GRAY1 }}>
                        <Viewport>
                            <Container x={20} y={20}>
                                <Sprite texture={Texture.WHITE} width={414} height={896} />
                            </Container>
                            <Container x={454} y={20}>
                                <Sprite texture={Texture.WHITE} width={414} height={896} />
                            </Container>
                        </Viewport>

                        <Container x={size.width - 100} y={size.height - 100} scale={0.1}>
                            <Container x={20} y={20}>
                                <Sprite texture={Texture.WHITE} width={414} height={896} />
                            </Container>
                            <Container x={454} y={20}>
                                <Sprite texture={Texture.WHITE} width={414} height={896} />
                            </Container>
                        </Container>
                    </Stage>
                )}
            </div>
        </ResizeSensor>
    );
};

export default Renderer;
