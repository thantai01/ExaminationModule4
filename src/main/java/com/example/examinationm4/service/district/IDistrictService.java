package com.example.examinationm4.service.district;

import com.example.examinationm4.model.District;
import com.example.examinationm4.service.IGeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IDistrictService extends IGeneralService<District> {
    Page<District> findAll(Pageable pageable);

    Iterable<District> findAllByProvinceId(long province_id);
}
