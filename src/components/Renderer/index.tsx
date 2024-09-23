import { ResizeSensor } from "@blueprintjs/core";
import { Container, Sprite, Stage } from "@pixi/react";
import { Texture } from "pixi.js";
import { FC, useState } from "react";

interface RendererProps {
    data: any;
    onDataChange: (data: any) => Promise<void> | void;
}

const Renderer: FC<RendererProps> = ({ data, onDataChange }) => {
    const [size, setSize] = useState<DOMRectReadOnly>();

    console.log(data, onDataChange);

    return (
        <ResizeSensor onResize={([entry]) => setSize(entry.contentRect)}>
            <div style={{ width: "100%", height: "100%", border: '0.5px solid black' }}>
                {size && (
                    <Stage width={size?.width} height={size?.height} options={{ background: 0x1099bb }}>
                        <Container>
                            <Sprite texture={Texture.WHITE} width={200} height={210} />
                        </Container>
                    </Stage>
                )}
            </div>
        </ResizeSensor>
    );
};

export default Renderer;
