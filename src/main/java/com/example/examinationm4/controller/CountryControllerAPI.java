package com.example.examinationm4.controller;

import com.example.examinationm4.model.Country;
import com.example.examinationm4.service.country.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class CountryControllerAPI {
    @Autowired
    private ICountryService countryService;

    @GetMapping("/countries")
    public ResponseEntity<Iterable<Country>> findAll() {
        Iterable<Country> iterable = countryService.findAll();
        return new ResponseEntity<>(iterable, HttpStatus.OK);
    }
    @GetMapping("/countries/{id}")
    public ResponseEntity<Optional<Country>> findOneById(@PathVariable long id) {
        Optional<Country> selected = countryService.findOneById(id);
        if(selected.isPresent()) {
            return new ResponseEntity<>(selected,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    @PostMapping("/countries")
    public ResponseEntity<Void> create(@RequestBody Country country) {
        countryService.save(country);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
