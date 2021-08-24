package com.example.examinationm4.controller;

import com.example.examinationm4.model.District;
import com.example.examinationm4.model.Province;
import com.example.examinationm4.service.district.IDistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class DistrictServiceAPI {
    @Autowired
    private IDistrictService districtService;

    @GetMapping("/districts")
    public ResponseEntity<Iterable<District>> findAll() {
        Iterable<District> iterable = districtService.findAll();
        return new ResponseEntity<>(iterable, HttpStatus.OK);
    }

    @PostMapping("/districts")
    public ResponseEntity<District> save(@RequestBody District district) {
        districtService.save(district);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
