package com.example.examinationm4.service;

import java.util.Optional;

public interface IGeneralService<T> {
    Iterable<T> findAll();
    Optional<T> findOneById(long id);
    T save(T t);
    void delete(long id);
}
