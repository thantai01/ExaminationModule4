package com.example.examinationm4.repository;

import com.example.examinationm4.model.Province;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProvinceRepository  extends PagingAndSortingRepository<Province, Long> {

    @Override
    Page<Province> findAll(Pageable pageable);
}
