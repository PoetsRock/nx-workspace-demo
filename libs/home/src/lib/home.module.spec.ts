import { async, TestBed } from '@angular/core/testing';
import { HomeModule } from './home.module';

describe('HomeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HomeModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(HomeModule).toBeDefined();
  });
});
