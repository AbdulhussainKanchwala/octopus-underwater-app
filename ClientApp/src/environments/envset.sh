#sed -i -e "s/envtestVariables/$testVariables/g" src/environments/environment.prod.ts
#sed -i -e "s/envSSOlogin/$SSOlogin/g" src/environments/environment.prod.ts
#sed -i -e "s/envSSOlogout/$SSOlogout/g" src/environments/environment.prod.ts
#sed -i -e "s/envEmsAdminPortalApi/$EmsAdminPortalApi/g" src/environments/environment.prod.ts
#sed -i -e "s/envWebUIProjectURL/$WebUIProjectURL/g" src/environments/environment.prod.ts
sed -i -e 's@envtestVariables@'"$testVariables"'@' src/environments/environment.prod.ts
sed -i -e 's@envSSOlogin@'"$SSOlogin"'@' src/environments/environment.prod.ts
sed -i -e 's@envSSOlogout@'"$SSOlogout"'@' src/environments/environment.prod.ts
sed -i -e 's@envEmsAdminPortalApi@'"$EmsAdminPortalApi"'@' src/environments/environment.prod.ts
sed -i -e 's@envWebUIProjectURL@'"$WebUIProjectURL"'@' src/environments/environment.prod.ts
sed -i -e 's@envFontawesomeToken@'"$FontawesomeToken"'@' /var/jenkins_home/.npmrc