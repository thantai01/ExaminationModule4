package com.example.examinationm4.repository;

import com.example.examinationm4.model.City;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends PagingAndSortingRepository<City,Long> {

    @Query("select city from City city where city.country.id =?1 ")
    Iterable<City> findAllByCountryId(long id);
}
