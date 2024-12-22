import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  public displayedColumns: string[] = [' '];
  public dataSource = new MatTableDataSource<number[]>([]);
  @Input() public set data(data: number[][]) {
    this.dataSource = new MatTableDataSource(data);
    this.displayedColumns = [' '];
    Array.from(Array(data[0].length).keys()).map((d) => {
      this.displayedColumns.push((d + 1).toString());
    });
  }
  public editor = {
    // use to change the switch to input
    editPointer: {
      col: -1,
      row: -1,
    },
  };
  public switchToInput(rindex: number, cindex: number): void {
    this.editor.editPointer.col = cindex;
    this.editor.editPointer.row = rindex;
  }
}
