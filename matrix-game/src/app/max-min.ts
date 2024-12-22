import { MaxMinResult } from "./max-min-result";

export class MaxMin {
    constructor(private values: number[][]){}

    public optimize(): MaxMinResult{
        let maxMinValue = this.values[0][0];
        let maxMinRows:number[] = [];

        for(let row = 0; row < this.values.length; ++row){
            let minRowValue = this.values[row][0];
            for(let col = 0; col < this.values[0].length; ++col){
                if (this.values[row][col] < minRowValue){
                    minRowValue = this.values[row][col]
                }
            }
            if(minRowValue > maxMinValue){
                maxMinRows = [row];
                maxMinValue = minRowValue;
            } else if (minRowValue == maxMinValue){
                maxMinRows.push(row);
            }
        }
        let res = {
            maxMinRows: maxMinRows,
            maxMinValue: maxMinValue
        }
        return res;
    }

}