package com.example.examinationm4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter @Setter
public class District {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    @ManyToOne
    private Province province;

    public District(long id, String name, Province province) {
        this.id = id;
        this.name = name;
        this.province = province;
    }

    public District() {
    }
}
