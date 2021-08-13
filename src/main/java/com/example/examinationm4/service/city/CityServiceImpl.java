package com.example.examinationm4.service.city;

import com.example.examinationm4.model.City;
import com.example.examinationm4.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CityServiceImpl implements ICityService{
    @Autowired
    private CityRepository cityRepository;

    @Override
    public Iterable<City> findAll() {
        return cityRepository.findAll();
    }

    @Override
    public Optional<City> findOneById(long id) {
        return cityRepository.findById(id);
    }

    @Override
    public City save(City city) {
        return cityRepository.save(city);
    }

    @Override
    public void delete(long id) {
        cityRepository.deleteById(id);
    }

    @Override
    public Iterable<City> findAllByCountryId(long id) {
        return cityRepository.findAllByCountryId(id);
    }

    @Override
    public Iterable<City> findAll(Pageable pageable) {
        return cityRepository.findAll(pageable);
    }
}
