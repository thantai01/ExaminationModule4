package com.example.examinationm4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter @Getter
public class Ward {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @ManyToOne
    private District district;

    public Ward(long id, String name, District district) {
        this.id = id;
        this.name = name;
        this.district = district;
    }

    public Ward() {
    }
}
