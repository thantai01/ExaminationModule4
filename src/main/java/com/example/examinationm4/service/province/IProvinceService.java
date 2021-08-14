package com.example.examinationm4.service.province;

import com.example.examinationm4.model.Province;
import com.example.examinationm4.service.IGeneralService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IProvinceService extends IGeneralService<Province> {
    Page<Province> findAll(Pageable pageable);
}
