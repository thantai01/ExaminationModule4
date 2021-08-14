package com.example.examinationm4.service.ward;

import com.example.examinationm4.model.Ward;
import com.example.examinationm4.service.IGeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IWardService extends IGeneralService<Ward> {
    Page<Ward> findAll(Pageable pageable);

    Iterable<Ward> findAllByDistrictId(long district_id);
}
