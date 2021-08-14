package com.example.examinationm4.repository;

import com.example.examinationm4.model.Ward;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WardRepository  extends PagingAndSortingRepository<Ward,Long> {
    @Override
    Page<Ward> findAll(Pageable pageable);

    Iterable<Ward> findAllByDistrictId(long district_id);
}
