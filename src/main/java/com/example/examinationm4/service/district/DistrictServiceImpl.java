package com.example.examinationm4.service.district;

import com.example.examinationm4.model.District;
import com.example.examinationm4.repository.DistrictRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DistrictServiceImpl implements IDistrictService{
    @Autowired
    private DistrictRepository districtRepository;

    @Override
    public Iterable<District> findAll() {
        return districtRepository.findAll();
    }

    @Override
    public Optional<District> findOneById(long id) {
        return Optional.empty();
    }

    @Override
    public District save(District district) {
        return districtRepository.save(district);
    }

    @Override
    public void delete(long id) {
        districtRepository.deleteById(id);
    }

    @Override
    public Page<District> findAll(Pageable pageable) {
        return districtRepository.findAll(pageable);
    }

    @Override
    public Iterable<District> findAllByProvinceId(long province_id) {
        return districtRepository.findAllByProvinceId(province_id);
    }
}
