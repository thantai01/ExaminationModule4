package com.example.examinationm4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter @Setter
public class Province {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String division_type;
    private String codename;
    private int phone_code;

    public Province(String name, String division_type, String codename, int phone_code) {
        this.name = name;
        this.division_type = division_type;
        this.codename = codename;
        this.phone_code = phone_code;
    }

    public Province() {
    }
}
