import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { DataLocalService } from "./data-local.service";

describe('DataLocalService', () => {
    let service: DataLocalService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ]
        });
        service = TestBed.inject(DataLocalService)
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });
})