package com.example.examinationm4.controller;


import com.example.examinationm4.model.Ward;
import com.example.examinationm4.service.ward.IWardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class WardControllerAPI {
    @Autowired
    private IWardService wardService;

    @GetMapping("/wards")
    public ResponseEntity<Iterable<Ward>> findAll() {
        Iterable<Ward> iterable = wardService.findAll();
        return new ResponseEntity<>(iterable, HttpStatus.OK);
    }

    @PostMapping("/wards")
    public ResponseEntity<Ward> save(@RequestBody Ward ward) {
        wardService.save(ward);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
