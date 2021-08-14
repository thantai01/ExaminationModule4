package com.example.examinationm4.repository;

import com.example.examinationm4.model.District;
import com.example.examinationm4.model.Province;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DistrictRepository extends PagingAndSortingRepository<District, Long> {

    @Override
    Page<District> findAll(Pageable pageable);

    Iterable<District> findAllByProvinceId(long province_id);
}
