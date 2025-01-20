declare class TimelineAnimation {
    constructor(canvas: HTMLElement | null, lines: any[], items: any[], canvasData: any, startYear: number, endYear: number);
    animate(timestamp: number) : void;
    cancel(): void;
}

export default TimelineAnimation;
