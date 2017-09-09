import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { OverviewComponent } from './overview.component';
import { Restaurant } from '../../../models/restaurant';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  const restaurant = new Restaurant('Test',
    { city: 'city', area: 'area', street: 'street', number: '15' },
    'Bistro', 14, '09:00-23:00', '09:00-23:00', '+3598888888', 'details', 'owner');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    component.restaurant = restaurant;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render address correctly', () => {
    debugElement = fixture.debugElement.query(By.css('#address'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.address.city);
    expect(element.textContent).toContain(restaurant.address.area);
    expect(element.textContent).toContain(restaurant.address.street);
    expect(element.textContent).toContain(restaurant.address.number.toString());
  });

  it('should render type correctly', () => {
    debugElement = fixture.debugElement.query(By.css('#type'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.type);
  });

  it('should render details correctly', () => {
    debugElement = fixture.debugElement.query(By.css('#details'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.details);
  });

  it('should render average bill correctly', () => {
    debugElement = fixture.debugElement.query(By.css('#bill'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.averageBill.toString());
  });

  it('should render opening hours weekdays correctly', () => {
    debugElement = fixture.debugElement.query(By.css('#weekdays'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.openingHoursWeekdays);
  });

  it('should render opening hours weekends correctly', () => {
    debugElement = fixture.debugElement.query(By.css('#weekends'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.openingHoursWeekends);
  });

  it('should render contact correctly', () => {
    debugElement = fixture.debugElement.query(By.css('#contact'));
    element = debugElement.nativeElement;
    expect(element).toBeDefined();
    expect(element.textContent).toContain(restaurant.contact);
  });
});
