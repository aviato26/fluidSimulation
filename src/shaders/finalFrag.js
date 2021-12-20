

exports.finalFrag =
`
uniform sampler2D bufferTexture;
uniform sampler2D imgTexture;
uniform vec2 res;
//varying vec2 vUv;

// all shaders used were created by Gijs at shader toy, link is below
//https://www.shadertoy.com/view/tt3yzn

void main()
{
  //vec2 v = vUv;
  vec2 uv = gl_FragCoord.xy / res.xy;

  // adding fluid texture
  vec4 c = texture(bufferTexture, uv);

  // subtracting fluid texture uv coordinate to the texture image coordinate
  vec4 b = texture(imgTexture, uv - c.w);
  //gl_FragColor = vec4(abs(c.xy)*1.0f, abs(c.z)*100.0f, c.w);
  //gl_FragColor = vec4(c.w);
  //gl_FragColor = vec4(c.w, 0.0, 0.0, 1.0);
  //gl_FragColor = vec4(abs(b.xy)*1.0f, abs(b.z)*100.0f, b.w);

  // adding fluid texture to the red channel of the img texture to apply red fluid
  //gl_FragColor = vec4(b.x + c.w * 3.0, b.y, b.z, b.w);

  // this is texture has the ink with no color added
  gl_FragColor = b;
}


`
