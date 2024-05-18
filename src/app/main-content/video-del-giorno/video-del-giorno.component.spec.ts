import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDelGiornoComponent } from './video-del-giorno.component';

describe('VideoDelGiornoComponent', () => {
  let component: VideoDelGiornoComponent;
  let fixture: ComponentFixture<VideoDelGiornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDelGiornoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoDelGiornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
