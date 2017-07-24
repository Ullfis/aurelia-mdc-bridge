export interface IMdcGridCellAlign {
    'top': string;
    'middle': string;
    'bottom': string;
}
export declare type IMdcGridCellNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export declare class MdcGridCell {
    class: string;
    span: IMdcGridCellNumber;
    spanDesktop: IMdcGridCellNumber;
    spanTablet: IMdcGridCellNumber;
    spanPhone: IMdcGridCellNumber;
    order: IMdcGridCellNumber;
    align: keyof IMdcGridCellAlign;
    private elementDiv;
    private attached();
}
