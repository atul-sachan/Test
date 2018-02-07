import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { DataService } from './data.service';

describe('DataService', () => {

  let service: DataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });

    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrive posts from the api via GET', () => {
    const dummyPosts: Array<Object> = [
      { userId: 1, id: 1, body: 'Hello World', title: 'Testing Angular' },
      { userId: 1, id: 2, body: 'Hello World2', title: 'Testing Angular2' },
      { userId: 2, id: 3, body: 'Hello World4', title: 'Testing Angular4' },
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(3);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(`${service.ROOT_URL}/posts`);
    expect(request.request.method).toBe('GET');

    request.flush(dummyPosts);

  });

  // it('should be created', inject([DataService], (service: DataService) => {
  //   expect(service).toBeTruthy();
  // }));
});
