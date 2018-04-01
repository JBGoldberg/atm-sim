import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from '../environments/environment';

import { AtmService } from './atm.service';

describe('AtmService', () => {
  let httpMock: HttpTestingController;
  let service: AtmService;

   // Prepare the enviroment to each test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [AtmService]
    });

    service = TestBed.get(AtmService);
    httpMock = TestBed.get(HttpTestingController);

  });

  // Make sure enviroment is clean after each test
  afterEach(()=> {
    httpMock.verify();
  })

  it('should be created', inject([AtmService], (service: AtmService) => {
    expect(service).toBeTruthy();
  }));

  it('should return right notes for withdraw of $30', () => {

    let expectedResponse = {
      10: 1,
      20: 1,
      50: 0,
      100: 0
    }

    service.withdraw(30).subscribe((res: any) => {
      expect(res).toEqual(expectedResponse);
    });

    // Execute the calls into Http mock
    let call = httpMock.expectOne(`${environment.api}/api/atm/withdraw?amount=30`);
    expect(call.request.method).toBe('GET');
    expect(call.request.params.get('amount')).toEqual('30');
    call.flush(expectedResponse);

  });

  it('should return right notes for withdraw of $80', () => {

    let expectedResponse = {
      10: 1,
      20: 1,
      50: 1,
      100: 0
    }

    service.withdraw(80).subscribe((res: any) => {
      expect(res).toEqual(expectedResponse);
    });

    // Execute the calls into Http mock
    let call = httpMock.expectOne(`${environment.api}/api/atm/withdraw?amount=80`);
    expect(call.request.method).toBe('GET');
    expect(call.request.params.get('amount')).toEqual('80');
    call.flush(expectedResponse);

  });

  it('should return right notes for withdraw of $125', () => {

    let expectedResponse = {
      exception: 'NoteUnavailableException'
    }

    service.withdraw(125).subscribe((res: any) => {
      expect(res.exception).toBe('NoteUnavailableException');
    });

    // Execute the calls into Http mock
    let call = httpMock.expectOne(`${environment.api}/api/atm/withdraw?amount=125`);
    expect(call.request.method).toBe('GET');
    expect(call.request.params.get('amount')).toEqual('125');
    call.flush(expectedResponse);

  });

  it('should return NoteUnavailableException for withdraw of $125', () => {

    let expectedResponse = {
      exception: 'NoteUnavailableException'
    }

    service.withdraw(125).subscribe((res: any) => {
      expect(res.exception).toBe('NoteUnavailableException');
    });

    // Execute the calls into Http mock
    let call = httpMock.expectOne(`${environment.api}/api/atm/withdraw?amount=125`);
    expect(call.request.method).toBe('GET');
    expect(call.request.params.get('amount')).toEqual('125');
    call.flush(expectedResponse);

  });

  it('should return InvalidArgumentException for withdraw of $-130', () => {

    let expectedResponse = {
      exception: 'InvalidArgumentException'
    }

    service.withdraw(-130).subscribe((res: any) => {
      expect(res.exception).toBe('InvalidArgumentException');
    });

    // Execute the calls into Http mock
    let call = httpMock.expectOne(`${environment.api}/api/atm/withdraw?amount=-130`);
    expect(call.request.method).toBe('GET');
    expect(call.request.params.get('amount')).toEqual('-130');
    call.flush(expectedResponse);

  });

  it('should return no notes for withdraw of null', () => {

    let expectedResponse = {
      money: {
        10: 0,
        20: 0,
        50: 0,
        100: 0,
      }
    }

    service.withdraw(null).subscribe((res: any) => {
      expect(res).toEqual(expectedResponse);
    });

    // Execute the calls into Http mock
    let call = httpMock.expectOne(`${environment.api}/api/atm/withdraw?amount=null`);
    expect(call.request.method).toBe('GET');
    expect(call.request.params.get('amount')).toEqual('null');
    call.flush(expectedResponse);

  });

});
