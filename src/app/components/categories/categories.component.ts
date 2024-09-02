import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/service/categories.service';
import { ICategores } from '../../core/interface/icategores';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{
  private readonly _CategoriesService=inject(CategoriesService);

  categoryList:ICategores[]=[];

  ngOnInit(): void {
      this._CategoriesService.getAllCategories().subscribe({
        next:(res)=>{
          console.log(res.data);
          this.categoryList=res.data
        }
      })
  }
}
