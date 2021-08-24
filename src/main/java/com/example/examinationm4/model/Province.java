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
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private int phone_code;

    public Province(long id, String name, int phone_code) {
        this.id = id;
        this.name = name;
        this.phone_code = phone_code;
    }

    public Province() {
    }
}
