



exports.advection =
`
// advection & boundary & control

uniform sampler2D bufferTexture;
uniform vec2 res;
uniform vec4 mouse;
//varying vec2 vUv;
uniform float dt;
uniform float dx;
uniform float nu;

//const float dt = 0.9f;
//const float dx = 1.00f;
//const float nu = 0.00001f;

// all shaders used were created by Gijs at shader toy, link is below
//https://www.shadertoy.com/view/tt3yzn

void main()
{
    vec2 uv = gl_FragCoord.xy;

    vec4 o = texelFetch(bufferTexture, ivec2(uv), 0);
    vec4 n = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, 1), 0);
    vec4 e = texelFetch(bufferTexture, ivec2(uv) + ivec2( 1, 0), 0);
    vec4 s = texelFetch(bufferTexture, ivec2(uv) + ivec2( 0, -1), 0);
    vec4 w = texelFetch(bufferTexture, ivec2(uv) + ivec2(-1, 0), 0);

    // advection
    vec4 a = texture(bufferTexture, (uv - o.xy * dt) / res.xy);
    gl_FragColor = a;


    // interaction
    if(mouse.z==1.0f)
    {
        vec2 d = uv - mouse.xy;
        float r = length(d);
        //vec2 d2 = mouse.xy - abs(mouse.zw);
        vec2 d2 = mouse.xy - vec2(.1);
        float r2 = length(d2);
        if(r2>0.0f)
        {
            gl_FragColor.xy += d2/r2*exp(-r*r*0.01f);
            gl_FragColor.w += 0.5f*exp(-r*r*0.01f);
            gl_FragColor.w = min(gl_FragColor.w, .8f);
        }
    }


    // boundary condition
    if(uv.x == 0.5f)
    {
        gl_FragColor.xy = -e.xy;
        gl_FragColor.z = e.z;
        gl_FragColor.w = 0.0f;
    }

    if(uv.y == 0.5f)
    {
        gl_FragColor.xy = -n.xy;
        gl_FragColor.z = n.z;
        gl_FragColor.w = 0.0f;
    }

    if(uv.x == res.x-0.5f)
    {
        gl_FragColor.xy = -w.xy;
        gl_FragColor.z = w.z;
        gl_FragColor.w = 0.0f;
    }

    if(uv.y == res.y-0.5f)
    {
        gl_FragColor.xy = -s.xy;
        gl_FragColor.z = s.z;
        gl_FragColor.w = 0.0f;
    }
}
`
