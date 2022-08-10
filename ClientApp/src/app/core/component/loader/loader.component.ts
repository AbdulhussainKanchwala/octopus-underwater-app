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
      if(state.show){
        this.show = true;
        this.progressRef.start();
      }
      else{
        this.progressRef.complete();
        setTimeout(() => {
          this.show = false;
        }, 500);
      }
    });
  }

  ngOnDestroy() {
    this.loaderStateSubscription.unsubscribe();
    this.progressRef.destroy();
  }

}
