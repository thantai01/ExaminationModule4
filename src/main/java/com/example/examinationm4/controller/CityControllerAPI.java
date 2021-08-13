package com.example.examinationm4.controller;

import com.example.examinationm4.model.City;
import com.example.examinationm4.service.city.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CityControllerAPI {
    @Autowired
    private ICityService cityService;

    @GetMapping("/cities")
    public ResponseEntity<Iterable<City>> findAll(Pageable pageable) {
        Iterable<City> findAll = cityService.findAll(pageable);
        return new ResponseEntity<>(findAll, HttpStatus.OK);
    }
    @PostMapping("/cities")
    public ResponseEntity<City> save(@RequestBody City city) {
        return new ResponseEntity<>(cityService.save(city),HttpStatus.CREATED);
    }
    @GetMapping("/cities/{id}/detail")
    public ResponseEntity<Optional<City>> detail(@PathVariable long id) {
        Optional<City> selected = cityService.findOneById(id);
        if(selected.isPresent()) {
            return new ResponseEntity<>(selected,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @PutMapping("/cities/{id}/edit")
    public ResponseEntity<Void> edit (@PathVariable long id, @RequestBody City city) {
        Optional<City> selected = cityService.findOneById(id);
        if(selected.isPresent()) {
            city.setId(id);
            cityService.save(city);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    @DeleteMapping("/cities/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id) {
        Optional<City> selected = cityService.findOneById(id);
        if(selected.isPresent()) {
            cityService.delete(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    @GetMapping("/cities/byCountry/{countryId}")
    public ResponseEntity<Iterable<City>> findAllByCountry(@PathVariable long countryId) {
        Iterable<City> list = cityService.findAllByCountryId(countryId);
        return new ResponseEntity<>(list,HttpStatus.OK);
    }
}
