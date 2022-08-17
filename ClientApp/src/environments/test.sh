echo ${testVariables}
echo $testVariables
echo $production
#sed -i -e "s/testVariables123/${production}/g" src/environments/environment.prod.ts
sed -i -e "s/envSSOlogin/${SSOlogin}/g" src/environments/environment.prod.ts
sed -i -e "s/envSSOlogout/${SSOlogout}/g" src/environments/environment.prod.ts
sed -i -e "s/envEmsAdminPortalApi/${EmsAdminPortalApi}/g" src/environments/environment.prod.ts
sed -i -e "s/envWebUIProjectURL/${WebUIProjectURL}/g" src/environments/environment.prod.ts
sed -i -e "s/envWebAPIProjectURL/${WebAPIProjectURL}/g" src/environments/environment.prod.ts