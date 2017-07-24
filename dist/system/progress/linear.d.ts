export declare class MdcLinearProgress {
    class: string;
    accent: boolean;
    indeterminate: boolean;
    reversed: boolean;
    progress: number;
    buffer: number;
    open: boolean;
    private elementDiv;
    private mdcElement;
    private bind();
    private attached();
    private detached();
    private accentChanged(newValue);
    private indeterminateChanged(newValue);
    private reversedChanged(newValue);
    private progressChanged(newValue);
    private bufferChanged(newValue);
    private openChanged(newValue);
}
