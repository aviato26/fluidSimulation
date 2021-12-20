

exports.projection =
`
// projection

uniform sampler2D bufferTexture;
uniform vec2 res;
uniform float dt;
uniform float dx;
uniform float nu;
//varying vec2 vUv;

// all shaders used were created by Gijs at shader toy, link is below
//https://www.shadertoy.com/view/tt3yzn

//const float dt = 5.0f;
//const float dx = 1.00f;
//const float nu = 0.00001f;

void main()
{

    vec2 uv = gl_FragCoord.xy;

    vec4 o = texelFetch(bufferTexture, ivec2(uv), 0);
    vec4 n = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, 1), 0);
    vec4 e = texelFetch(bufferTexture, ivec2(uv) + ivec2( 1, 0), 0);
    vec4 s = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, -1), 0);
    vec4 w = texelFetch(bufferTexture, ivec2(uv) + ivec2(-1, 0), 0);

    // gradient of the pressure
    vec2 grad = vec2( e.z - w.z, n.z - s.z ) / (2.0f * dx * dx);

    // project
    gl_FragColor = vec4(o.xy - grad, o.zw);
}
`
