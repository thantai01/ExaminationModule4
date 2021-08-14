package com.example.examinationm4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class District {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String division_type;
    private String codename;
    @ManyToOne
    private Province province;

    public District(String name, String division_type, String codename, Province province) {
        this.name = name;
        this.division_type = division_type;
        this.codename = codename;
        this.province = province;
    }

    public District() {
    }
}
