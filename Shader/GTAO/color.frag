#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(location = 0) in vec2 inUV;

layout(location = 0) out vec4 outColor;

layout(set = 1, binding = 0) uniform sampler s;
layout(set = 1, binding = 1) uniform texture2D t_albedo;
layout(set = 1, binding = 2) uniform texture2D t_ao;
layout(set = 1, binding = 3) uniform texture2D t_lighting;
layout(set = 1, binding = 4) uniform texture2D t_shadow;

void main() {
    vec3 color = texture(sampler2D(t_albedo, s), inUV).rgb;
    vec3 ao = texture(sampler2D(t_ao, s), inUV).rrr;
    vec3 lighting = texture(sampler2D(t_lighting, s), inUV).rgb;
    outColor = vec4(color * ao * lighting, 1.0);

    if (inUV.x < 0.25 && inUV.y < 0.25) {
        outColor = vec4(texture(sampler2D(t_shadow, s), inUV * 4.0).rrr, 1.0);
    }
}