import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()],
      providers: [FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render input elements', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const emailInput = compiled.querySelector('ion-input[name="email"]');
    const passwordInput = compiled.querySelector('ion-input[name="password"]');

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
 });

 it('should test input email validity', () => {
    const emailInput = component.loginForm.controls.email;

    expect(emailInput.valid).toBeFalsy();

    emailInput.setValue('test@test.es');
    expect(emailInput.valid).toBeTruthy();

    emailInput.setValue('test');
    expect(emailInput.valid).toBeFalsy();
 })

 it('should test input password validity', () => {
    const passInput = component.loginForm.controls.password;

    expect(passInput.valid).toBeFalsy();

    passInput.setValue('12345');
    expect(passInput.valid).toBeTruthy();

    passInput.setValue('123');
    expect(passInput.valid).toBeFalsy();
 })

 it('should test form validity', () => {
    const form = component.loginForm;
    expect(form.valid).toBeFalsy();

    const emailInput = form.controls.email;
    emailInput.setValue('test@test.es');

    const passInput = form.controls.password;
    passInput.setValue('12345');

    expect(form.valid).toBeTruthy();

    passInput.setValue('123');

    expect(form.valid).toBeFalsy();
 })

 it('should test login', () => {
  component.login();

  expect(component.isSubmitted).toBeTruthy();
 })
});
