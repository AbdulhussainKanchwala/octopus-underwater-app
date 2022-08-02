import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgProgress, NgProgressRef } from 'ngx-progressbar';
import { Subscription } from 'rxjs';
import { LoaderState } from '../../models/loader';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit,OnDestroy {

  show = false;
  private loaderStateSubscription: Subscription = new Subscription();
  progressValue = 0;
  progressRef!: NgProgressRef;

  constructor(
    private loaderService: LoaderService,
    private ngProgress: NgProgress
  ) { }

  ngOnInit() {
    this.progressRef = this.ngProgress.ref();

    this.loaderStateSubscription = this.loaderService.loaderState.subscribe((state: LoaderState) => {
      this.show = state.show;
      if(this.show){
        this.progressRef.start();
      }
      else{
        this.progressRef.complete();
      }
    });
  }

  ngOnDestroy() {
    this.loaderStateSubscription.unsubscribe();
    this.progressRef.destroy();
  }

}
