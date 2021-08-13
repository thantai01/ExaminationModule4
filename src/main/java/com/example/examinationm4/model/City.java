package com.example.examinationm4.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private Country country;

    private String cityName;
    private long population;
    private double square;
    private double GPD;
    private String description;
    private String image;

    public City(Country country, String cityName, long population, double square, double GPD, String description, String image) {
        this.country = country;
        this.cityName = cityName;
        this.population = population;
        this.square = square;
        this.GPD = GPD;
        this.description = description;
        this.image = image;
    }

    public City() {
    }
}