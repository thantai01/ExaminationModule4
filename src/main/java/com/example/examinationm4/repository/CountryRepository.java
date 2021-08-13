package com.example.examinationm4.repository;

import com.example.examinationm4.model.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepository  extends CrudRepository<Country,Long> {

}
