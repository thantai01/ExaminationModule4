package com.example.examinationm4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter @Getter
public class Ward {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String division_type;
    private String codename;
    @ManyToOne
    private District district;

    public Ward(String name, String division_type, String codename, District district) {
        this.name = name;
        this.division_type = division_type;
        this.codename = codename;
        this.district = district;
    }

    public Ward() {
    }
}
