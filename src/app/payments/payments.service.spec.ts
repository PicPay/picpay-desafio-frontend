import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PaymentsService } from './payments.service';

const mockResult = {
  apiUrl: "https://www.mocky.io/v2/5d531c4f2e0000620081ddce",
  data: [
    {
      "id": 1032,
      "name": "Paulo Noronha",
      "img": "https://randomuser.me/api/portraits/men/68.jpg",
      "username": "@paulo.noronha"
    }
  ]

}

describe('PaymentsService', () => {
  let service: PaymentsService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaymentsService]
    })

    service = TestBed.get(PaymentsService);
    httpController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be send http GET in API and return all contacts from user', () => {
    service.getAllContacts().subscribe(
      data => {
        expect(data[0].id).toEqual(1032);
        expect(data[0].img).toBe("https://randomuser.me/api/portraits/men/68.jpg")
        expect(data[0].name).toBe("Paulo Noronha")
        expect(data[0].username).toBe("@paulo.noronha")

      }
    )
    httpController.expectOne(mockResult.apiUrl).flush(mockResult.data);
  });
});
