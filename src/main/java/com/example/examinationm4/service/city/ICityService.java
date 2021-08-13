package com.example.examinationm4.service.city;

import com.example.examinationm4.model.City;
import com.example.examinationm4.service.IGeneralService;
import org.springframework.data.domain.Pageable;

public interface ICityService extends IGeneralService<City> {
    Iterable<City> findAllByCountryId(long id);
    Iterable<City> findAll(Pageable pageable);
}
