package com.example.examinationm4.controller;

import com.example.examinationm4.model.Province;
import com.example.examinationm4.service.province.IProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProvinceControllerAPI {
    @Autowired
    private IProvinceService provinceService;

    @GetMapping("/provinces")
    public ResponseEntity<Iterable<Province>> findAll() {
        Iterable<Province> provinces = provinceService.findAll();
        return new ResponseEntity<>(provinces, HttpStatus.OK);
    }

    @PostMapping("/provinces")
    public ResponseEntity<Province> save(@RequestBody Province province) {
        provinceService.save(province);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

}
