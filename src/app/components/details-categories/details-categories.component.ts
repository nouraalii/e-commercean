import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoriesService } from '../../core/service/categories.service';
import { ICategores } from '../../core/interface/icategores';


@Component({
  selector: 'app-details-categories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details-categories.component.html',
  styleUrl: './details-categories.component.scss'
})
export class DetailsCategoriesComponent {
  private readonly _ActivatedRoute=inject(ActivatedRoute);
  private readonly _CategoriesService=inject(CategoriesService);

  CategoriesDetails:ICategores |null = null; 

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{
        let idCategory=p.get('id');

        this._CategoriesService.getSpecificCategories(idCategory).subscribe({
          next:(res)=>
            {
              console.log(res);
              this.CategoriesDetails=res.data
              
            }
        })
      }
    })
  }

}
