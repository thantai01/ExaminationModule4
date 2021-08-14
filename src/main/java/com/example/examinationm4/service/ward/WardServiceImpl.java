package com.example.examinationm4.service.ward;

import com.example.examinationm4.model.Ward;
import com.example.examinationm4.repository.WardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WardServiceImpl implements IWardService{
    @Autowired
    private WardRepository wardRepository;

    @Override
    public Iterable<Ward> findAll() {
        return wardRepository.findAll();
    }

    @Override
    public Optional<Ward> findOneById(long id) {
        return wardRepository.findById(id);
    }

    @Override
    public Ward save(Ward ward) {
        return wardRepository.save(ward);
    }

    @Override
    public void delete(long id) {
        wardRepository.deleteById(id);
    }

    @Override
    public Page<Ward> findAll(Pageable pageable) {
        return wardRepository.findAll(pageable);
    }

    @Override
    public Iterable<Ward> findAllByDistrictId(long district_id) {
        return wardRepository.findAllByDistrictId(district_id);
    }
}
