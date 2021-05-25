import { CreditCardPipe } from './credit-card.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('CreditCardPipe', () => {

	describe('Test function', () => {
		const pipe = new CreditCardPipe();

		it('should take the last 4 digits', () => {
			expect(pipe.transform("4111111111111234")).toBe('1234')
			expect(pipe.transform("1111111111111111")).toBe('1111')
		})
	});

	describe('Pipe behavior test', () => {
		@Component({
			template: `
				LastNumbersCard: {{ cardNumber | creditCard }}
			`
		})

		class TestComponent {
			cardNumber = "4111111111111234";
		}

		let component: TestComponent;
		let fixture: ComponentFixture<TestComponent>;
		let el: HTMLElement;

		beforeEach(() => {
			TestBed.configureTestingModule({
				declarations: [
					CreditCardPipe,
					TestComponent
				]
			});

			fixture = TestBed.createComponent(TestComponent);
			component = fixture.componentInstance;
			el = fixture.nativeElement;
		});

		it('should take the last 4 digits', () => {
			fixture.detectChanges();
			expect(el.textContent).toContain("1234");
			component.cardNumber = "1111111111111111";
			fixture.detectChanges();
			expect(el.textContent).toContain("1111");

		})
	})
})