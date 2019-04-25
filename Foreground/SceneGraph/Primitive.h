#pragma once
#include "ForegroundAPI.h"
#include "Material/BasicMaterial.h"
#include "Shape/TriangleMesh.h"
#include <BoundingBox.h>
#include <memory>

namespace Foreground
{

// Represents the most basic drawable unit
class FOREGROUND_API CPrimitive
{
public:
    tc::BoundingBox GetBoundingBox() const;

private:
    std::shared_ptr<CBasicMaterial> Material;
    std::shared_ptr<CTriangleMesh> Shape;
};

} /* namespace Foreground */